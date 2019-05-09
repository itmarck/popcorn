<template>
  <article>
    <div>
      <!-- W: 400px H: 600px -->
      <img
        src="@/assets/aquaman.jpg"
        alt="Cover"
        width="400px"
        height="600px"
      />
    </div>
    <h3>Aquaman</h3>
    <h4>2018</h4>
  </article>
</template>

<style scoped>
div {
  cursor: pointer;
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}

div:hover::after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}

h3,
h4 {
  margin: 0;
  font-size: 1rem;
  cursor: default;
}

h3 {
  margin: 0.5em 0;
}

h4 {
  color: var(--textoClaro);
  font-weight: normal;
  font-size: 0.8em;
}
</style>
