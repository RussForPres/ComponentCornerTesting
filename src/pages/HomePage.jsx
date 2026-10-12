import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to TechVault"
        subtitle="Quality technology for everyday life."
        buttonText="Shop Now"
      />

      <section>
        <h2>Why Shop With Us?</h2>
        <p>
          We make it easy to find quality technology at great prices.
        </p>
      </section>
    </>
  );
}

export default HomePage;