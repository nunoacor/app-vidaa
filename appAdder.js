async function addApp(appName, imgUrl, thumbUrl, appUrl, description) {
	const container = document.getElementById("AllApps");
	container.innerHTML = container.innerHTML + `<a href="app.html?appName=${encodeURIComponent(appName)}&thumbUrl=${encodeURIComponent(thumbUrl)}&appUrl=${encodeURIComponent(appUrl)}&appIcon=${encodeURIComponent(imgUrl)}&description=${encodeURIComponent(description)}"><img style="width: 150px; height: 150px; float: left;" data-caption="Caption 1" src="${imgUrl}" alt="${appName}"></a>`
}

async function fetchRepo(repoUrl) {
	const response = await fetch(repoUrl);
	if (!response.ok) throw new Error("Failed to fetch repo");
	const apps = await response.json();
	Object.values(apps).forEach(app => {
		addApp(app.name, app.img, app.thumb, app.url, app.description);
	});
}

fetchRepo("repo.json");