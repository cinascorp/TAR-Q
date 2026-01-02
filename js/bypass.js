const proxify = (u) => [
				u,
				`https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
				`https://cors.isomorphic-git.org/${u}`
			];
			for (const base of urls) {
				const attempts = useProxy ? proxify(base) : [base];
				for (const u of attempts) {
					try {
						const resp = await fetch(u, { cache: 'no-store', headers: { 'Accept': 'application/json, text/javascript, */*; q=0.01' } });
						if (!resp.ok) continue;
						const text = await resp.text();
						// response may be JSON or JS
						let data = null;
						try { data = JSON.parse(text); } catch (e) { data = eval('(' + text + ')'); }
						if (data && typeof data === 'object') return data;
					} catch (e) {
						continue;
					}
				}
			}
//add this script in the beginning of html as script befor header
