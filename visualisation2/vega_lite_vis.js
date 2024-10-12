var vg_1 = "./visualisations/ausEnergyProduction.json";
vegaEmbed("#production", vg_1, {actions: false}).then(function(result){}).catch(console.error);

var vg_2 = "./visualisations/ausEnergyConsumFuelState.json";
vegaEmbed("#consumption", vg_2, {actions: false}).then(function(result){}).catch(console.error);

var vg_3 = "./visualisations/ausEnergyFlow2023.json";
vegaEmbed("#flow", vg_3, {actions: false}).then(function(result){}).catch(console.error);

var vg_4 = "./visualisations/ausNetZeroTracking.json";
vegaEmbed("#netzero", vg_4, {actions: false}).then(function(result){}).catch(console.error);

var vg_5 = "./visualisations/ausEnergyMixPortion.json";
vegaEmbed("#mix", vg_5, {actions: false}).then(function(result){}).catch(console.error);

var vg_6 = "./visualisations/worldShareFuelConsumPercent.json";
vegaEmbed("#world", vg_6, {actions: false}).then(function(result){}).catch(console.error);