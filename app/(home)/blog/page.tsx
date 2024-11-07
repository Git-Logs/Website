import Link from 'next/link';
import { blog } from '@/app/source';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  return (
    <main className="container max-sm:px-0 md:py-12">
      <div
        className="h-[300px] p-8 md:h-[400px] md:p-12 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 70% 10%, rgba(32, 0, 68, 1), transparent)',
            'radial-gradient(circle at 0% 80%, rgba(140, 82, 255, 1), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(32, 0, 68, 1), transparent)',
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          ].join(', '),
        }}
      >
        <h1 className="pb-2 mb-4 text-4xl font-bold border-b-4 border-fd-foreground md:text-5xl">
          Welcome to the Octoflow Blog
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Stay updated with the latest news, tips, and insights on how to make the most out of Octoflow. Discover best practices, feature updates, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col p-4 transition-colors bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">
              {post.data.description}
            </p>

            <p className="pt-4 mt-auto text-xs text-fd-muted-foreground">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}