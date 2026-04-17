import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './hackathon-page.css'

const quickFacts = [
  { label: 'Theme', value: 'Agentic AI' },
  { label: 'Date', value: '18-19 April' },
  { label: 'Format', value: '36-Hour Hackathon' },
  { label: 'Team Size', value: '2-4 members' },
  { label: 'Venue', value: 'APJ' },
  { label: 'Eligibility', value: 'All IIT Roorkee students' },
]

const mustImpactTrack1 = [
  'Card/manifest generator in nasiko/app/utils/agentcard_generator/ with a sibling MCP manifest generator that reuses tools and loop scaffolding.',
  'Observability injection in nasiko/app/utils/observability/injector.py and nasiko/orchestrator/instrumentation_injector.py for MCP servers.',
  'Orchestrator wiring in nasiko/orchestrator/agent_builder.py and redis_stream_listener.py, including stdio-to-HTTP bridge startup for stdio servers.',
  'Kong routing rules for the new MCP server artifact type.',
  'Upload validation with automatic artifact-type detection (agent vs MCP server).',
  'Agent-to-MCP association path (web/CLI metadata/config) with no agent code changes.',
  'Developer docs: how to publish an MCP server and consume it from an agent.',
]

const mustNotImpactTrack1 = [
  'Existing agent upload paths (LangChain, CrewAI, and any other supported framework) including behavior, validation, and trace output.',
  'AgentCard generator output for the same agent input must remain byte-identical to baseline.',
  'Existing HTTP API surface (/api/v1/agents/upload, /agents/upload-directory) with no required new params or breaking changes.',
  'Agent upload project structure contract (no new top-level requirements).',
  'Existing Kong routing rules and service-discovery contract for agent services.',
  'Redis stream contract used by redis_stream_listener.py.',
]

const track1Acceptance = [
  'A stdio-based MCP server using the official Python MCP SDK publishes end-to-end with manifest generation, observability injection, bridge startup, build, and deploy.',
  'Published MCP server appears in web app and CLI list as a first-class artifact.',
  'Auto-generated MCP manifest is non-empty, accurate, and viewable in web app + CLI.',
  'A developer can associate an existing LangChain/CrewAI agent to a published MCP server with no code changes, and tool calls work end-to-end in web app + CLI chat/invoke.',
  'Every agent-to-MCP tool call produces correlated spans in Phoenix and remains visible via web app + CLI trace views.',
  'Existing agent sample uploads still upload, list, chat, and run unchanged.',
  'Stretch: remote MCP server registration by URL (HTTP/SSE) works with manifest, callability, listing, and trace shape parity.',
]

const mustImpactTrack2 = [
  'Infrastructure deployment in orchestrator and cli/setup, plus nasiko/docker-compose.local.yml for local development.',
  'Agent runtime env injection of gateway URL and virtual key.',
  'Traceability and span correlation between agent requests and gateway calls.',
  'Docs: how to use gateway and explicit guidance not to hardcode provider keys.',
  'At least one sample agent updated to use the gateway pattern.',
]

const mustNotImpactTrack2 = [
  'Upload/build/deploy pipeline contract (no unrelated refactors).',
  'Agent project structure contract.',
  'Existing trace/metric format shape (extra gateway spans are fine).',
  'Legacy agents that still use direct provider keys should not be force-broken during this hackathon.',
  'Kong agent-to-user routing behavior.',
]

const track2Acceptance = [
  'Gateway auto-deploys through make start-nasiko (or equivalent orchestrator entrypoint).',
  'Sample agent completes LLM call without provider key in source, using gateway URL + virtual key.',
  'Changing provider is gateway-config only, with no agent code change.',
  'Existing agents keep working without modification.',
]

const integrationTests = {
  track1: [
    'Upload a valid stdio MCP server built on official Python MCP SDK -> expect 200, deploy via build pipeline, listable via nasiko mcp list, callable by configured agent, and traces present.',
    'Upload an MCP server missing src/main.py -> expect clear validation error.',
    'Upload an artifact ambiguous between an agent and MCP server -> expect clear validation error, not silent misdetection.',
    'Auto-generated manifest for MCP server contains declared tools, resources, and prompts.',
    'Same MCP tool invocation through CLI chat/invoke behaves identically to web app flow.',
    'Stretch: register a remote MCP URL (HTTP/SSE) -> appears in list, has non-empty manifest, callable by agent, and emits Phoenix traces matching uploaded stdio shape.',
    'Stretch: unreachable or non-MCP remote URL -> clear registration-time validation error.',
  ],
  track2: [
    'Boot platform -> gateway is up and reachable in agents network.',
    'Sample agent without provider key performs successful LLM call via gateway.',
    'Provider rotation in gateway config still succeeds without agent code changes.',
    'Gateway request creates span linked to calling agent trace.',
  ],
}

const contributionFlow = [
  'Fork the open-source repository and pick a track.',
  'Open an issue with your design first for maintainer scope check.',
  'Open focused PR with feature code, integration tests, docs update, and behavior notes.',
  'Keep CI green and avoid out-of-scope formatting churn/refactors.',
]

const codeOfConduct = [
  'All participants must be present at APJ during the event.',
  'Bring your own extension board if required; Srishti will not provide one.',
  'Choose any one of the two Nasiko problem statement tracks and solve it.',
  'All submissions must be made on Nasiko\'s official repository.',
  'Participants should fork the given repository and work on their forked copy.',
  'All participants should star the repository before submission.',
  'No submissions from hostel rooms will be entertained.',
  'The problem statement will be live only during the event hours.',
]

export default function HackathonPage() {
  return (
    <>
      <Navbar />
      <SplashCursor />

      <main className="hk26-page">
        <section className="hk26-hero">
          <p className="hk26-kicker">SRISHTI x NASIKO</p>
          <h1 className="hk26-title">STACK UP HACKATHON</h1>
          <p className="hk26-tagline">
            A 36-hour sprint into Agentic AI where ideas turn into real products overnight.
          </p>

          <div className="hk26-cta-wrap">
            <a
              className="hk26-cta hk26-cta-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScse0GuEmUlpEIThqydErtcbZeuAgy1Q-L9LDXi59sAoTuNew/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
            <a className="hk26-cta hk26-cta-outline" href="https://srishti.iitr.ac.in/noprepPS2.pdf" target="_blank" rel="noreferrer">
              View Problem Statement
            </a>
          </div>
        </section>

        <section className="hk26-facts" aria-label="Hackathon quick facts">
          {quickFacts.map((fact) => (
            <article key={fact.label} className="hk26-fact-card">
              <p className="hk26-fact-label">{fact.label}</p>
              <p className="hk26-fact-value">{fact.value}</p>
            </article>
          ))}
        </section>

        <section className="hk26-panel">
          <h2 className="hk26-section-title">Why Participate</h2>
          <p className="hk26-copy">
            Build fast. Ship faster. Compete harder. This hackathon is open to both beginners and
            experienced builders, with a real chance to team up, pick a meaningful problem, and
            deliver a working AI product in one intense weekend.
          </p>
          <p className="hk26-copy">
            Participation is free and open to all IIT Roorkee students. Spots are limited.
          </p>
          <div className="hk26-contact-row">
            <span>Queries:</span>
            <a href="tel:+919125525580">Swastic: 9125525580</a>
            <a href="tel:+918421433458">Gaurav: 8421433458</a>
          </div>
        </section>

        <section className="hk26-panel">
          <h2 className="hk26-section-title">Code of Conduct</h2>
          <div className="hk26-subpanel">
            <ul>
              {codeOfConduct.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hk26-contact-row" style={{ marginTop: '18px' }}>
            <span>Official repository:</span>
            <a href="https://github.com/Nasiko-Labs/nasiko" target="_blank" rel="noreferrer">
              github.com/Nasiko-Labs/nasiko
            </a>
          </div>
        </section>

        <section id="hk26-problem-statement" className="hk26-panel hk26-problem-doc">
          <h2 className="hk26-section-title">Nasiko Hackathon Contribution Design Doc</h2>
          <p className="hk26-copy">
            Audience: College hackathon participants contributing to the open-source subset of the
            Nasiko platform. Scope: defines what to build and what must (and must not) be impacted.
          </p>

          <div className="hk26-grid-two">
            <article className="hk26-subpanel">
              <h3>Background</h3>
              <ul>
                <li>Nasiko validates uploaded agents and metadata.</li>
                <li>It generates AgentCard.json if absent.</li>
                <li>It injects Arize Phoenix + OpenTelemetry observability at deploy time.</li>
                <li>It builds/deploys container images and registers agents with Kong.</li>
                <li>Current baseline assumes LangChain/CrewAI.</li>
              </ul>
            </article>

            <article className="hk26-subpanel">
              <h3>Unchanged Agent Structure Contract</h3>
              <pre className="hk26-code">{`my-agent/
├── docker-compose.yml
├── Dockerfile
└── src/
    └── main.py`}</pre>
              <p>
                This exact top-level structure remains mandatory for all supported frameworks.
              </p>
            </article>
          </div>

          <article className="hk26-track">
            <div className="hk26-track-head">
              <h3>Track 1: MCP Server Publishing and Agent Integration</h3>
              <p>
                Add first-class support for publishing MCP servers as deployable artifacts with
                validation, manifest generation, observability, capability discovery, and end-to-end
                deploy/callability parity.
              </p>
            </div>

            <div className="hk26-grid-two">
              <div className="hk26-subpanel">
                <h4>Build Requirements</h4>
                <ul>
                  <li>Automatic artifact-type detection (agent vs MCP server) and transport detection with loud validation failures on ambiguity.</li>
                  <li>Stdio transport is primary target, with deploy-time stdio-to-HTTP bridge required for platform routing and observability.</li>
                  <li>MCP manifest generation when absent, capturing tools, resources, and prompts from FastMCP decorators or equivalent server handlers.</li>
                  <li>Capability discovery plus association mechanism so existing agents can consume published MCP tools with no code changes.</li>
                  <li>Stretch: remote MCP registration by URL (HTTP/SSE) with the same discovery, routing, and tracing behavior.</li>
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Must Impact</h4>
                <ul>
                  {mustImpactTrack1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Must Not Impact</h4>
                <ul>
                  {mustNotImpactTrack1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Acceptance Criteria</h4>
                <ul>
                  {track1Acceptance.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="hk26-track">
            <div className="hk26-track-head">
              <h3>Track 2: LLM Router Gateway Integration</h3>
              <p>
                Add a platform-managed LLM gateway (LiteLLM or Portkey) so agents can use a
                platform endpoint and virtual key instead of hardcoded provider keys.
              </p>
            </div>

            <div className="hk26-grid-two">
              <div className="hk26-subpanel">
                <h4>Build Requirements</h4>
                <ul>
                  <li>Gateway deploys in existing infra/orchestrator flow.</li>
                  <li>Legacy direct-key agents remain functional and are not force-broken.</li>
                  <li>Provider credentials managed centrally in gateway config/secrets.</li>
                  <li>Choice of LiteLLM or Portkey should be documented with trade-off rationale.</li>
                  <li>Documentation explicitly warns against hardcoding model keys.</li>
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Must Impact</h4>
                <ul>
                  {mustImpactTrack2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Must Not Impact</h4>
                <ul>
                  {mustNotImpactTrack2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hk26-subpanel">
                <h4>Acceptance Criteria</h4>
                <ul>
                  {track2Acceptance.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="hk26-track">
            <div className="hk26-track-head">
              <h3>Required Integration Tests</h3>
              <p>Integration tests are mandatory for both tracks and should run in CI.</p>
            </div>
            <div className="hk26-grid-two">
              <div className="hk26-subpanel">
                <h4>Track 1 Tests</h4>
                <ul>
                  {integrationTests.track1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="hk26-subpanel">
                <h4>Track 2 Tests</h4>
                <ul>
                  {integrationTests.track2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="hk26-track">
            <div className="hk26-track-head">
              <h3>How to Contribute</h3>
              <p>Keep changes focused and include end-to-end evidence.</p>
            </div>
            <div className="hk26-subpanel">
              <ol>
                {contributionFlow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </article>

          <article className="hk26-track">
            <div className="hk26-track-head">
              <h3>Fixed Design Decisions</h3>
            </div>
            <div className="hk26-grid-two">
              <div className="hk26-subpanel">
                <h4>Already Fixed</h4>
                <ul>
                  <li>Track 1 detection uses imports/manifests as primary signal.</li>
                  <li>Track 2 gateway runs in-cluster as first-class deployment.</li>
                  <li>If gateway is down, model requests fail clearly (no fallback/queueing).</li>
                </ul>
              </div>
              <div className="hk26-subpanel">
                <h4>You Must Design</h4>
                <ul>
                  <li>
                    Virtual key provisioning and rotation model: minting, storage, and rotation
                    policy.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  )
}