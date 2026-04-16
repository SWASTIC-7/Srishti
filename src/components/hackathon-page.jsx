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
  'AgentCard generator in nasiko/app/utils/agentcard_generator/ (agent.py, tools.py).',
  'Observability injection in nasiko/app/utils/observability/injector.py and nasiko/orchestrator/instrumentation_injector.py.',
  'Orchestrator wiring in nasiko/orchestrator/agent_builder.py and redis_stream_listener.py (only where needed).',
  'Upload validation and framework detection in upload/API service layers.',
  'Developer docs: how to upload a clawbot agent.',
]

const mustNotImpactTrack1 = [
  'LangChain and CrewAI behavior, validation, and traces (no regressions).',
  'HTTP API surface (/api/v1/agents/upload, /agents/upload-directory).',
  'Agent folder contract (docker-compose.yml, Dockerfile, src/main.py).',
  'Kong routing rules and service-discovery contract.',
  'Redis stream contract used by redis_stream_listener.py.',
]

const track1Acceptance = [
  'A nanoclaw sample agent uploads end-to-end with AgentCard generation, observability injection, build, and deploy.',
  'Agent appears in Nasiko web app and nasiko CLI list, and is chat-usable in both.',
  'Auto-generated AgentCard.json is non-empty, accurate, and visible in web app + CLI.',
  'Traces are stored in Arize Phoenix and surfaced through web app + CLI without changing user-facing paths.',
  'Existing LangChain/CrewAI sample agents still upload, list, chat, and run unchanged.',
]

const mustImpactTrack2 = [
  'Infrastructure deployment in orchestrator and cli/setup, plus nasiko/docker-compose.local.yml for local dev.',
  'Agent runtime env injection of gateway URL and virtual key.',
  'Traceability and span correlation between agent requests and gateway calls.',
  'Docs: how to use gateway and explicit guidance not to hardcode provider keys.',
  'At least one sample agent updated to use the gateway pattern.',
]

const mustNotImpactTrack2 = [
  'Upload/build/deploy pipeline contract (no unrelated refactors).',
  'Agent project structure contract.',
  'Existing trace/metric format shape (extra gateway spans are fine).',
  'Legacy agents that still use direct provider keys (migration is opt-in).',
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
    'Upload valid nanoclaw agent -> expect 200, Kong reachability, and traces present.',
    'Upload clawbot agent missing src/main.py -> expect clear validation error.',
    'Upload LangChain agent regression test -> behavior matches baseline.',
    'Generated AgentCard.json for clawbot contains declared tools.',
  ],
  track2: [
    'Boot platform -> gateway is up and reachable in agents network.',
    'Sample agent without provider key performs successful LLM call via gateway.',
    'Provider rotation in gateway config still succeeds without agent code changes.',
    'Gateway request creates span linked to calling agent trace.',
  ],
}

const contributionFlow = [
  'Fork nasiko-oss/nasiko and pick Track 1, Track 2, or both.',
  'Open an issue with your design first for maintainer scope check.',
  'Open focused PR with feature code, integration tests, docs update, and behavior notes.',
  'Keep CI green and avoid out-of-scope formatting churn/refactors.',
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
            <a className="hk26-cta hk26-cta-outline" href="#hk26-problem-statement">
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

        <section id="hk26-problem-statement" className="hk26-panel hk26-problem-doc">
            <h2 className='hk26-section-title'>PROBLEM STATEMENT WILL BE OUT SOON !</h2>
          {/* <h2 className="hk26-section-title">Nasiko Hackathon Contribution Design Doc</h2>
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
              <h3>Track 1: Clawbot-Style Agent Integration</h3>
              <p>
                Add support for nanoclaw, zeroclaw, and sibling clawbot frameworks with automatic
                detection and full pipeline parity.
              </p>
            </div>

            <div className="hk26-grid-two">
              <div className="hk26-subpanel">
                <h4>Build Requirements</h4>
                <ul>
                  <li>Automatic framework detection from source/manifests.</li>
                  <li>Clear validation error when detection is ambiguous.</li>
                  <li>AgentCard generation without splitting into a separate clawbot generator.</li>
                  <li>Equivalent observability injection and route capability discovery.</li>
                  <li>Working upload -&gt; build -&gt; deploy -&gt; Kong route flow.</li>
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
                  <li>Legacy direct-key agents remain functional (opt-in migration).</li>
                  <li>Provider credentials managed centrally in gateway config/secrets.</li>
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
          </article> */}
        </section>
      </main>

      <Footer />
    </>
  )
}