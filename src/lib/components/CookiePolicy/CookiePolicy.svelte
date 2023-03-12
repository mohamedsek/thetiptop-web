<!-- CookiePolicy.svelte -->

{#if !accepted}
  <div class="cookie-policy">
    <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site Web. En poursuivant votre navigation sur notre site, vous acceptez notre utilisation des cookies. </p>
    <button on:click={acceptCookies}>Accept</button>
  </div>
{/if}

<style>
  .cookie-policy {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #c0f3bb;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .cookie-policy button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<script>
  import { onMount, onDestroy } from 'svelte';

  const COOKIE_POLICY_KEY = 'accepted_cookie_policy';
  let accepted = false;

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_POLICY_KEY, 'true');
    }
    accepted = true;
  }

  const destroy = () => {
    if (!accepted && typeof window !== 'undefined') {
      localStorage.removeItem(COOKIE_POLICY_KEY);
    }
  }

  onDestroy(destroy);

  const hasAcceptedCookiePolicy = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(COOKIE_POLICY_KEY) === 'true';
    }
    return false;
  }

  onMount(() => {
    accepted = hasAcceptedCookiePolicy();
  });
</script>
