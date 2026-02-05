import React from 'react';
import Image from 'next/image';

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

export interface CodeBlock {
  language: string;
  code: string;
  title?: string;
}

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'list' | 'code' | 'table' | 'image' | 'gif' | 'divider' | 'callout';
  content?: string | string[];
  level?: 2 | 3 | 4;
  ordered?: boolean;
  data?: TableData | CodeBlock | ImageData;
  variant?: 'info' | 'warning' | 'success' | 'error';
}

export interface DocSectionData {
  title: string;
  description?: string;
  blocks: ContentBlock[];
}

interface DocSectionProps {
  section: DocSectionData;
}

export default function DocSection({ section }: DocSectionProps) {
  return (
    <article className="space-y-8">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">{section.title}</h1>
        {section.description && (
          <p className="text-lg text-muted-foreground">{section.description}</p>
        )}
      </div>

      {/* Content Blocks */}
      <div className="space-y-10">
        {section.blocks.map((block, index) => (
          <ContentBlockRenderer key={index} block={block} />
        ))}
      </div>
    </article>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return <HeadingBlock content={block.content as string} level={block.level || 2} />;

    case 'text':
      return <TextBlock content={block.content as string} />;

    case 'list':
      return <ListBlock items={block.content as string[]} ordered={block.ordered} />;

    case 'code':
      return <CodeBlock data={block.data as CodeBlock} />;

    case 'table':
      return <TableBlock data={block.data as TableData} />;

    case 'image':
      return <ImageBlock data={block.data as ImageData} />;

    case 'gif':
      return <GifBlock data={block.data as ImageData} />;

    case 'divider':
      return <div className="border-t border-border my-12" />;

    case 'callout':
      return <CalloutBlock content={block.content as string} variant={block.variant} />;

    default:
      return null;
  }
}

function HeadingBlock({ content, level }: { content: string; level: 2 | 3 | 4 }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const className = level === 2
    ? "text-3xl font-bold tracking-tight border-b border-border pb-3"
    : level === 3
    ? "text-2xl font-bold tracking-tight"
    : "text-xl font-semibold tracking-tight";

  return <Tag className={className}>{content}</Tag>;
}

function TextBlock({ content }: { content: string }) {
  return <p className="text-base leading-relaxed text-foreground/90">{content}</p>;
}

function ListBlock({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul';
  const listStyle = ordered ? 'list-decimal' : 'list-disc';

  return (
    <Tag className={`${listStyle} pl-6 space-y-3 text-foreground/90`}>
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">{item}</li>
      ))}
    </Tag>
  );
}

function CodeBlock({ data }: { data: CodeBlock }) {
  return (
    <div className="my-8">
      {data.title && (
        <div className="text-sm font-medium text-foreground/70 mb-2">{data.title}</div>
      )}
      <pre className="bg-slate-950 border border-slate-800 rounded-lg p-6 overflow-x-auto">
        <code className="text-slate-50 text-sm font-mono">{data.code}</code>
      </pre>
    </div>
  );
}

function TableBlock({ data }: { data: TableData }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-muted">
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="border border-border p-4 text-left font-semibold text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-muted/50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-border p-4 text-foreground/90"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ImageBlock({ data }: { data: ImageData }) {
  return (
    <figure className="my-12">
      <div className="rounded-lg border border-border overflow-hidden shadow-md">
        <Image
          src={data.src}
          alt={data.alt}
          width={data.width || 1200}
          height={data.height || 600}
          className="w-full h-auto"
        />
      </div>
      {data.caption && (
        <figcaption className="text-sm text-muted-foreground text-center mt-3">
          {data.caption}
        </figcaption>
      )}
    </figure>
  );
}

function GifBlock({ data }: { data: ImageData }) {
  return (
    <figure className="my-12">
      <div className="rounded-lg border border-border overflow-hidden shadow-md bg-muted/30">
        <img
          src={data.src}
          alt={data.alt}
          className="w-full h-auto"
        />
      </div>
      {data.caption && (
        <figcaption className="text-sm text-muted-foreground text-center mt-3">
          {data.caption}
        </figcaption>
      )}
    </figure>
  );
}

function CalloutBlock({ content, variant = 'info' }: { content: string; variant?: 'info' | 'warning' | 'success' | 'error' }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/50 text-blue-200',
    warning: 'bg-yellow-500/10 border-yellow-500/50 text-yellow-200',
    success: 'bg-green-500/10 border-green-500/50 text-green-200',
    error: 'bg-red-500/10 border-red-500/50 text-red-200',
  };

  return (
    <div className={`border-l-4 pl-6 py-4 my-8 rounded-r ${styles[variant]}`}>
      <p className="leading-relaxed">{content}</p>
    </div>
  );
}
