
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Virginia_0": {
            "type": "geojson",
            "data": json_Virginia_0
        }
                    ,
        "SilverBay_1": {
            "type": "geojson",
            "data": json_SilverBay_1
        }
                    ,
        "RedLakeRedLake_2": {
            "type": "geojson",
            "data": json_RedLakeRedLake_2
        }
                    ,
        "OnamiaMilleLacs_3": {
            "type": "geojson",
            "data": json_OnamiaMilleLacs_3
        }
                    ,
        "NorthBranch_4": {
            "type": "geojson",
            "data": json_NorthBranch_4
        }
                    ,
        "NettLakeBoisForte_5": {
            "type": "geojson",
            "data": json_NettLakeBoisForte_5
        }
                    ,
        "MahnomenWhiteEarth_6": {
            "type": "geojson",
            "data": json_MahnomenWhiteEarth_6
        }
                    ,
        "InternationalFalls_7": {
            "type": "geojson",
            "data": json_InternationalFalls_7
        }
                    ,
        "Hibbing_8": {
            "type": "geojson",
            "data": json_Hibbing_8
        }
                    ,
        "GrandRapids_9": {
            "type": "geojson",
            "data": json_GrandRapids_9
        }
                    ,
        "GrandPortage_10": {
            "type": "geojson",
            "data": json_GrandPortage_10
        }
                    ,
        "GrandMarais_11": {
            "type": "geojson",
            "data": json_GrandMarais_11
        }
                    ,
        "FondDuLac_12": {
            "type": "geojson",
            "data": json_FondDuLac_12
        }
                    ,
        "Ely_13": {
            "type": "geojson",
            "data": json_Ely_13
        }
                    ,
        "Duluth_14": {
            "type": "geojson",
            "data": json_Duluth_14
        }
                    ,
        "CassLakeLeechLake_15": {
            "type": "geojson",
            "data": json_CassLakeLeechLake_15
        }
                    ,
        "Cambridge_16": {
            "type": "geojson",
            "data": json_Cambridge_16
        }
                    ,
        "Brainerd_17": {
            "type": "geojson",
            "data": json_Brainerd_17
        }
                    ,
        "Bemidji_18": {
            "type": "geojson",
            "data": json_Bemidji_18
        }
                    ,
        "Baudette_19": {
            "type": "geojson",
            "data": json_Baudette_19
        }
                    ,
        "CD8_20": {
            "type": "geojson",
            "data": json_CD8_20
        }
                    ,
        "2022LegislativeDistricts_21": {
            "type": "geojson",
            "data": json_2022LegislativeDistricts_21
        }
                    ,
        "CD8oldboundaries_22": {
            "type": "geojson",
            "data": json_CD8oldboundaries_22
        }
                    ,
        "CD82022boundaries_23": {
            "type": "geojson",
            "data": json_CD82022boundaries_23
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
            "id": "lyr_Virginia_0_0",
            "type": "fill",
            "source": "Virginia_0",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_SilverBay_1_0",
            "type": "fill",
            "source": "SilverBay_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_RedLakeRedLake_2_0",
            "type": "fill",
            "source": "RedLakeRedLake_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_OnamiaMilleLacs_3_0",
            "type": "fill",
            "source": "OnamiaMilleLacs_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_NorthBranch_4_0",
            "type": "fill",
            "source": "NorthBranch_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_NettLakeBoisForte_5_0",
            "type": "fill",
            "source": "NettLakeBoisForte_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_MahnomenWhiteEarth_6_0",
            "type": "fill",
            "source": "MahnomenWhiteEarth_6",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_InternationalFalls_7_0",
            "type": "fill",
            "source": "InternationalFalls_7",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Hibbing_8_0",
            "type": "fill",
            "source": "Hibbing_8",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandRapids_9_0",
            "type": "fill",
            "source": "GrandRapids_9",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandPortage_10_0",
            "type": "fill",
            "source": "GrandPortage_10",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_GrandMarais_11_0",
            "type": "fill",
            "source": "GrandMarais_11",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_FondDuLac_12_0",
            "type": "fill",
            "source": "FondDuLac_12",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Ely_13_0",
            "type": "fill",
            "source": "Ely_13",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Duluth_14_0",
            "type": "fill",
            "source": "Duluth_14",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_CassLakeLeechLake_15_0",
            "type": "fill",
            "source": "CassLakeLeechLake_15",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Cambridge_16_0",
            "type": "fill",
            "source": "Cambridge_16",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Brainerd_17_0",
            "type": "fill",
            "source": "Brainerd_17",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Bemidji_18_0",
            "type": "fill",
            "source": "Bemidji_18",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Baudette_19_0",
            "type": "fill",
            "source": "Baudette_19",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'AA_METERS'], 16094], 0.5, ['==', ['get', 'AA_METERS'], 32187], 0.5, ['==', ['get', 'AA_METERS'], 48280], 0.5, ['==', ['get', 'AA_METERS'], 64374], 0.5, ['==', ['get', 'AA_METERS'], 80467], 0.5, ['==', ['get', 'AA_METERS'], 96561], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'AA_METERS'], 16094], '#440154', ['==', ['get', 'AA_METERS'], 32187], '#414387', ['==', ['get', 'AA_METERS'], 48280], '#2a788e', ['==', ['get', 'AA_METERS'], 64374], '#23a884', ['==', ['get', 'AA_METERS'], 80467], '#7ad151', ['==', ['get', 'AA_METERS'], 96561], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_CD8_20_0",
            "type": "fill",
            "source": "CD8_20",
            "layout": {},
            "paint": {line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#b7484b'}
        }
,
        {
            "id": "lyr_2022LegislativeDistricts_21_0",
            "type": "line",
            "source": "2022LegislativeDistricts_21",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_CD8oldboundaries_22_0",
            "type": "line",
            "source": "CD8oldboundaries_22",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#4daf4a'}
        }
,
        {
            "id": "lyr_CD82022boundaries_23_0",
            "type": "fill",
            "source": "CD82022boundaries_23",
            "layout": {},
            "paint": {line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#0000ff'}
        }
],
}
