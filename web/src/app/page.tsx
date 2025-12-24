import Link from "next/link";
import styles from "./page.module.css";
import {
  sandboxTools,
  arenaTracks,
  liveChallenges,
  fieldNotes,
} from "@/data/arena";
import { ToolCard } from "@/components/ToolCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBackdrop} aria-hidden />
      <header className={styles.hero}>
        <div className={styles.heroPill}>Developer Arena</div>
        <h1 className={styles.heroTitle}>
          Launchpad for testing, comparing, and hardening AI tools.
        </h1>
        <p className={styles.heroSubtitle}>
          Skip the scattered trials. The arena curates production-ready sandboxes, live
          challenges, and field notes so your team can ship AI experiences with confidence.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryCta} href="#sandboxes">
            Open tool sandboxes
          </Link>
          <Link className={styles.secondaryCta} href="#programs">
            Join weekly playtest
          </Link>
        </div>
        <dl className={styles.heroMeta}>
          <div>
            <dt>Active sandboxes</dt>
            <dd>32</dd>
          </div>
          <div>
            <dt>Latency tracked</dt>
            <dd>Real-time</dd>
          </div>
          <div>
            <dt>Developer squads</dt>
            <dd>4.1k+</dd>
          </div>
        </dl>
      </header>

      <main className={styles.main}>
        <section id="sandboxes" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Featured sandboxes</h2>
            <p>
              High-signal environments instrumented for stress testing prompts, agents, copilot
              flows, and evaluation loops.
            </p>
          </div>
          <div className={styles.toolGrid}>
            {sandboxTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section id="programs" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Arena tracks</h2>
            <p>
              Structured pathways that bundle vetted tools, checklists, and observability dashboards
              for focused shipping cycles.
            </p>
          </div>
          <div className={styles.trackGrid}>
            {arenaTracks.map((track) => (
              <article key={track.title} className={styles.trackCard}>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
                <div className={styles.trackFocus}>
                  <span>Focus lanes</span>
                  <ul>
                    {track.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.trackTools}>
                  <span>Tool stack</span>
                  <div>
                    {track.recommendedTools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="challenges" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Live challenges</h2>
            <p>
              Ship a proof-of-concept, earn credits, and get your tooling stack reviewed by arena
              mentors. New briefs drop every week.
            </p>
          </div>
          <div className={styles.challengeList}>
            {liveChallenges.map((challenge) => (
              <article key={challenge.title} className={styles.challengeCard}>
                <header>
                  <span className={styles.challengeSponsor}>{challenge.sponsor}</span>
                  <h3>{challenge.title}</h3>
                </header>
                <p>{challenge.brief}</p>
                <dl className={styles.challengeMeta}>
                  <div>
                    <dt>Reward</dt>
                    <dd>{challenge.reward}</dd>
                  </div>
                  <div>
                    <dt>Deadline</dt>
                    <dd>{challenge.deadline}</dd>
                  </div>
                </dl>
                <Link href={challenge.link} target="_blank" className={styles.challengeLink}>
                  Review full brief →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Field notes &amp; telemetry</h2>
            <p>
              Digestible intelligence packages from teams running the arena in production. Remove
              the guesswork from your next deployment.
            </p>
          </div>
          <div className={styles.insightGrid}>
            {fieldNotes.map((insight) => (
              <article key={insight.title} className={styles.insightCard}>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <Link href={insight.link} className={styles.insightAction} target="_blank">
                  {insight.action} →
                </Link>
              </article>
            ))}
            <div className={styles.insightDigest}>
              <h3>Weekly digest</h3>
              <ul>
                <li>
                  Production incident walkthroughs with incident timelines and patch templates.
                </li>
                <li>Latency leaderboard across all arena sandboxes updated nightly.</li>
                <li>Feature rollout recipes for teams moving from labs to live traffic.</li>
              </ul>
              <Link href="https://arena.dev/digest" target="_blank">
                Subscribe to digest →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <h2>Ready to enter the arena?</h2>
          <p>
            Secure a slot in the next cohort and instantly access curated sandboxes, evaluation
            playbooks, and benchmarking data.
          </p>
        </div>
        <div className={styles.footerActions}>
          <Link href="https://arena.dev/apply" target="_blank">
            Apply for access
          </Link>
          <Link href="mailto:hello@arena.dev">Book a tooling consult</Link>
        </div>
      </footer>
    </div>
  );
}
