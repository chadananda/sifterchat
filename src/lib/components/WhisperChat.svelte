<script lang="ts">
  import { onMount } from 'svelte';
  
  let isOpen = false;
  let messages = [{
    id: 1,
    content: "Hello! How can I help you today?",
    timestamp: new Date().toLocaleTimeString(),
    isUser: false
  }];

  onMount(() => {
    customElements.define('whisper-chat', WhisperChat);
  });
</script>

<div class:active={isOpen} class="whisper-chat">
  {#if isOpen}
    <div 
      class="chat-window"
      style:view-transition-name="chat-window"
    >
      <button
        on:click={() => isOpen = false}
        class="close-button"
        aria-label="Close chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      
      <div 
        class="messages"
        style:view-transition-name="chat-messages"
      >
        {#each messages as message (message.id)}
          <div class="message {message.isUser ? 'user' : 'bot'}">
            <p>{message.content}</p>
            <time>{message.timestamp}</time>
          </div>
        {/each}
      </div>

      <form 
        class="input-form"
        on:submit|preventDefault={() => {
          // Handle message submission
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          enterkeyhint="send"
          autocomplete="off"
        />
        <button type="submit" aria-label="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </form>
    </div>
  {:else}
    <button
      on:click={() => isOpen = true}
      class="fob"
      aria-label="Open chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </button>
  {/if}
</div>

<style>
  :root {
    --chat-primary: oklch(67.1% 0.123 292.52);
    --chat-background: oklch(100% 0 0);
    --chat-foreground: oklch(27.18% 0.024 255.09);
    --chat-border: oklch(91.4% 0.011 255.09);
    --chat-radius: 0.75rem;
  }

  .whisper-chat {
    container-type: inline-size;
    position: fixed;
    inset: auto 1rem 1rem auto;
    z-index: 50;
  }

  .fob {
    size: 3.5rem;
    border-radius: 9999px;
    background: var(--chat-primary);
    color: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    transition: transform 0.2s;
    animation: fade-in 0.3s ease-out;
  }

  .fob:hover {
    transform: scale(1.1);
  }

  .fob:active {
    transform: scale(0.95);
  }

  .chat-window {
    position: fixed;
    inset: 1rem;
    background: var(--chat-background);
    border-radius: var(--chat-radius);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    display: grid;
    grid-template-rows: 1fr auto;
    animation: zoom-in 0.2s ease-out;
  }

  @container (min-width: 640px) {
    .chat-window {
      inset: auto;
      right: 1rem;
      bottom: 1rem;
      width: 400px;
      height: 600px;
    }
  }

  .messages {
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .message {
    max-width: 80%;
    padding: 0.5rem 1rem;
    border-radius: var(--chat-radius);
    animation: fade-in 0.3s ease-out;
  }

  .message.bot {
    align-self: flex-start;
    background: color-mix(in oklch, var(--chat-primary) 10%, white);
  }

  .message.user {
    align-self: flex-end;
    background: var(--chat-primary);
    color: white;
  }

  .input-form {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    background: color-mix(in oklch, var(--chat-background) 80%, transparent);
    backdrop-filter: blur(4px);
    border-top: 1px solid var(--chat-border);
  }

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid var(--chat-border);
    border-radius: var(--chat-radius);
    transition: box-shadow 0.2s;
  }

  input:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--chat-primary);
  }

  .close-button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0.5rem;
    border-radius: 9999px;
    transition: background 0.2s;
  }

  .close-button:hover {
    background: color-mix(in oklch, var(--chat-foreground) 10%, white);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  ::view-transition-old(chat-window),
  ::view-transition-new(chat-window) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-old(chat-messages),
  ::view-transition-new(chat-messages) {
    animation: none;
    mix-blend-mode: normal;
  }
</style>