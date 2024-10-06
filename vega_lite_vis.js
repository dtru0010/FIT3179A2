var vg_1 = "./visualisations/enerConsumPcap.json";
vegaEmbed("#aus_ener_consum_pcap", vg_1).then(function(result){}).catch(console.error);

var vg_2 = "./visualisations/totalEnerConsumStateFuel.json";
vegaEmbed("#aus_ener_consum_fuel_state", vg_2).then(function(result){}).catch(console.error);