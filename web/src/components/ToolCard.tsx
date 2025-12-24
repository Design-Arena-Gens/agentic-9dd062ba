import Link from "next/link";
import styles from "./ToolCard.module.css";
import type { Tool } from "@/data/arena";

type ToolCardProps = {
  tool: Tool;
};

const statusMap: Record<Tool["status"], string> = {
  stable: "Stable",
  beta: "Beta",
  alpha: "Alpha",
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles[tool.status]}`}>
          {statusMap[tool.status]}
        </span>
        <span className={styles.latency}>{tool.latency}</span>
      </div>
      <h3 className={styles.title}>{tool.name}</h3>
      <p className={styles.description}>{tool.description}</p>
      <ul className={styles.tags} aria-label="Tool tags">
        {tool.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>
        <span className={styles.updated}>Last updated {tool.updated}</span>
        <Link href={tool.url} className={styles.link} target="_blank">
          Launch sandbox →
        </Link>
      </footer>
    </article>
  );
}
