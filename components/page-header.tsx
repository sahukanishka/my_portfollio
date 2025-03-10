interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  );
}
