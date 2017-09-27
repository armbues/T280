var obj = document.getElementById('init-data');

if (obj != null) {
	var data = JSON.parse(obj.value);
	data.deciders.cramming_feature_enabled = true;
	data.deciders.cramming_ui_enabled = true;
	obj.value = JSON.stringify(data);
}