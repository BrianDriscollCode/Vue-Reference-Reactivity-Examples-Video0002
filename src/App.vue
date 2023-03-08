<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink class="links" to="/example-one">Example One</RouterLink>
		<RouterLink class="links" to="/example-two">Example Two</RouterLink>
      </nav>
  </header>

  <main>
	<RouterView class="viewItem" />
  </main>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: center;
	font-size: 1.8em;
}
.links {
	padding: 1em;
}

main {
	display: flex;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	flex-direction: column;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.viewItem {
	margin-left: auto;
	margin-right: auto;
}
</style>
