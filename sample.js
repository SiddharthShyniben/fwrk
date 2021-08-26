export const sample1 = `
<script>
import Hello from 'hello.fwrk';
import Foo from 'nowhere';
const name = 'world';

function getColor(text) {
	return '#' + text.toLowerCase().slice(0, 6).padEnd(6, 0).replace(/[^0-9a-f]/g, 0);
}

let seconds = 0;

setInterval(() => seconds++, 1000)
</script>

<Hello/>

<p style='color: {getColor(name)}'>This is your color</p>

<p>You have been here for {seconds} seconds</p>

<style>
* {
	color: red;
}
</style>
`.trim();

export const sample2 = `
<script>
import Hello from 'hello.fwrk';
</script>

<!-- This will be blue, as defined in hello.fwrk -->
<Hello/>

<p>This will be red</p>

<style>
* {
	color: red;
}
</style>
`.trim();