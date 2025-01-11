<!-- <script>
	import { readFileSync, writeFileSync, existsSync } from 'fs';
	import { join } from 'path';

	const path = '/Components/NameConverter.svelte';

	function renameFiles() {
		const files = readFileSync(path);
		let count = 1;

		files.forEach((file) => {
			const oldPath = join(path, file);
			const newPath = join(path, `new_file_${count}`);

			if (existsSync(oldPath)) {
				writeFileSync(oldPath, newPath);

				count++;
			}
		});
	}

	renameFiles();
	console.log(files);
</script>

<main>
	<p>Test</p>
</main>
<input type="file" />

 -->
