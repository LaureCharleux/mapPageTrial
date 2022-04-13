
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Baudette_1": {
            "type": "geojson",
            "data": json_Baudette_1
        }
                    ,
        "Virginia_2": {
            "type": "geojson",
            "data": json_Virginia_2
        }
                    ,
        "SilverBay_3": {
            "type": "geojson",
            "data": json_SilverBay_3
        }
                    ,
        "RedLakeRedLake_4": {
            "type": "geojson",
            "data": json_RedLakeRedLake_4
        }
                    ,
        "OnamiaMilleLacs_5": {
            "type": "geojson",
            "data": json_OnamiaMilleLacs_5
        }
                    ,
        "NorthBranch_6": {
            "type": "geojson",
            "data": json_NorthBranch_6
        }
                    ,
        "NettLakeBoisForte_7": {
            "type": "geojson",
            "data": json_NettLakeBoisForte_7
        }
                    ,
        "MahnomenWhiteEarth_8": {
            "type": "geojson",
            "data": json_MahnomenWhiteEarth_8
        }
                    ,
        "InternationalFalls_9": {
            "type": "geojson",
            "data": json_InternationalFalls_9
        }
                    ,
        "Hibbing_10": {
            "type": "geojson",
            "data": json_Hibbing_10
        }
                    ,
        "GrandRapids_11": {
            "type": "geojson",
            "data": json_GrandRapids_11
        }
                    ,
        "GrandPortage_12": {
            "type": "geojson",
            "data": json_GrandPortage_12
        }
                    ,
        "GrandMarais_13": {
            "type": "geojson",
            "data": json_GrandMarais_13
        }
                    ,
        "FondDuLac_14": {
            "type": "geojson",
            "data": json_FondDuLac_14
        }
                    ,
        "Ely_15": {
            "type": "geojson",
            "data": json_Ely_15
        }
                    ,
        "Duluth_16": {
            "type": "geojson",
            "data": json_Duluth_16
        }
                    ,
        "CassLakeLeechLake_17": {
            "type": "geojson",
            "data": json_CassLakeLeechLake_17
        }
                    ,
        "Cambridge_18": {
            "type": "geojson",
            "data": json_Cambridge_18
        }
                    ,
        "Brainerd_19": {
            "type": "geojson",
            "data": json_Brainerd_19
        }
                    ,
        "Bemidji_20": {
            "type": "geojson",
            "data": json_Bemidji_20
        }
                    ,
        "AdultPopulationandRecentturnout_21": {
            "type": "geojson",
            "data": json_AdultPopulationandRecentturnout_21
        }
                    ,
        "PotentialHubs_22": {
            "type": "geojson",
            "data": json_PotentialHubs_22
        }
                    ,
        "2022LegislativeDistricts_23": {
            "type": "geojson",
            "data": json_2022LegislativeDistricts_23
        }
                    ,
        "CD8oldboundaries_24": {
            "type": "geojson",
            "data": json_CD8oldboundaries_24
        }
                    ,
        "CD82022boundaries_25": {
            "type": "geojson",
            "data": json_CD82022boundaries_25
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Baudette_1_0",
            "type": "fill",
            "source": "Baudette_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Virginia_2_0",
            "type": "fill",
            "source": "Virginia_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_SilverBay_3_0",
            "type": "fill",
            "source": "SilverBay_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_RedLakeRedLake_4_0",
            "type": "fill",
            "source": "RedLakeRedLake_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_OnamiaMilleLacs_5_0",
            "type": "fill",
            "source": "OnamiaMilleLacs_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_NorthBranch_6_0",
            "type": "fill",
            "source": "NorthBranch_6",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_NettLakeBoisForte_7_0",
            "type": "fill",
            "source": "NettLakeBoisForte_7",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_MahnomenWhiteEarth_8_0",
            "type": "fill",
            "source": "MahnomenWhiteEarth_8",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_InternationalFalls_9_0",
            "type": "fill",
            "source": "InternationalFalls_9",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Hibbing_10_0",
            "type": "fill",
            "source": "Hibbing_10",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandRapids_11_0",
            "type": "fill",
            "source": "GrandRapids_11",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandPortage_12_0",
            "type": "fill",
            "source": "GrandPortage_12",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandMarais_13_0",
            "type": "fill",
            "source": "GrandMarais_13",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_FondDuLac_14_0",
            "type": "fill",
            "source": "FondDuLac_14",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Ely_15_0",
            "type": "fill",
            "source": "Ely_15",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Duluth_16_0",
            "type": "fill",
            "source": "Duluth_16",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_CassLakeLeechLake_17_0",
            "type": "fill",
            "source": "CassLakeLeechLake_17",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Cambridge_18_0",
            "type": "fill",
            "source": "Cambridge_18",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Brainerd_19_0",
            "type": "fill",
            "source": "Brainerd_19",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Bemidji_20_0",
            "type": "fill",
            "source": "Bemidji_20",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_AdultPopulationandRecentturnout_21_0",
            "type": "circle",
            "source": "AdultPopulationandRecentturnout_21",
            "layout": {},
            "paint": {'circle-radius': ['case', ['all', ['>=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 0.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 999.0]], ['/', ['*', 3.571428571428571, ['/', ['get', 'F18_POP'], 500]], 2], 0], 'circle-color': ['case', ['all', ['>=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 0.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0]], '#fff5f0', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0]], '#fdd6c4', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0]], '#fca486', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0]], '#fb7050', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0]], '#ea372a', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0]], '#ba1419', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 999.0]], '#67000d', '#ffffff'], 'circle-opacity': ['case', ['all', ['>=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 0.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0]], 1.0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 999.0]], 1.0, 0], 'circle-stroke-width': ['case', ['all', ['>=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 0.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0]], 0, ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 999.0]], 0, 0], 'circle-stroke-color': ['case', ['all', ['>=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 0.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 50.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 60.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 70.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 80.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 90.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0]], '#232323', ['all', ['>', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 100.0], ['<=', ['*', ['/', ['+', ['+', ['+', ['+', ['+', ['get', 'USREPR18'], ['get', 'USREPDFL18']], ['get', 'USREPR20']], ['get', 'USREPDFL20']], ['get', 'USREPOTH18']], ['get', 'USREPOTH20']], ['*', 2, ['get', 'F18_POP']]], 100], 999.0]], '#232323', '#000000']}
        }
,
        {
            "id": "lyr_PotentialHubs_22_0",
            "type": "circle",
            "source": "PotentialHubs_22",
            "layout": {},
            "paint": {'circle-radius': ['/', 15.714285714285715, 2], 'circle-color': '#54b04a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#3d8035'}
        }
,
        {
            "id": "lyr_2022LegislativeDistricts_23_0",
            "type": "line",
            "source": "2022LegislativeDistricts_23",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_CD8oldboundaries_24_0",
            "type": "line",
            "source": "CD8oldboundaries_24",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#4daf4a'}
        }
,
        {
            "id": "lyr_CD82022boundaries_25_0",
            "type": "line",
            "source": "CD82022boundaries_25",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#1f78b4'}
        }
],
}