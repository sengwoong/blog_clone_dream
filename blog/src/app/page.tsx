import Hero from "@/components/BlogHero/Hero";
import CarouselPosts from "@/components/BlogPostCard/CarouselPosts";
import FeaturedPosts from "@/components/BlogPostCard/FeaturedPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  );
}
