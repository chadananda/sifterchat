<script>
  import '../lib/components/WhisperChat.svelte';
</script>

<h1>Welcome to WhisperChat Test Site</h1>
<p>This is a test environment for the WhisperChat web component. The chat button should appear in the bottom right corner.</p>

<whisper-chat />

<style>
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: oklch(46.9% 0.023 255.09);
    max-width: 60ch;
  }
</style>