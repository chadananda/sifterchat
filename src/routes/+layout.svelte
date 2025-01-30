<script lang="ts">
  let currentPath = '';
  
  $: {
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
  }
</script>

<div class="app">
  <nav>
    <a 
      href="/" 
      class:active={currentPath === '/'}
    >
      Home
    </a>
    <a 
      href="/about" 
      class:active={currentPath === '/about'}
    >
      About
    </a>
    <a 
      href="/contact" 
      class:active={currentPath === '/contact'}
    >
      Contact
    </a>
  </nav>

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  }

  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: oklch(98% 0 0);
    border-bottom: 1px solid oklch(91.4% 0.011 255.09);
  }

  a {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: oklch(27.18% 0.024 255.09);
    text-decoration: none;
    transition: background 0.2s;
  }

  a:hover {
    background: oklch(96% 0 0);
  }

  a.active {
    background: oklch(67.1% 0.123 292.52);
    color: white;
  }

  main {
    padding: 2rem;
  }
</style>