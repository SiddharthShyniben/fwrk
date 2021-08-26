import {split} from './split.js';
import {resolve} from './resolve.js';

export function parse(code) {
	let {HTML, CSS, JS} = resolve(split(code, true));

	HTML = `
<!DOCTYPE html>
<html>
<head>
	<meta charset='UTF-8'>
	<title>My app</title>
	<link rel='stylesheet' href='<%css%>.css'>
</head>
<body>
${HTML.split('\n').map(line => '\t' + line).join('\n')}
<script src='<%js%>.js'></script>
</body>
</html>
`.trim();


	return {HTML, CSS, JS};
}
