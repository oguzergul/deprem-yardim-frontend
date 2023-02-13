import { MarkerData } from "@/mocks/types";
import { HeatmapLayerFactory } from "@vgrid/react-leaflet-heatmap-layer";
import { memo, useCallback } from "react";
import { AhbapClusterGroup } from "./AhbapClusterGroup";
import ClusterGroup from "./ClusterGroup";
import { MapLayer, useMapLayers } from "@/stores/mapStore";
import { TeleteyitClusterGroup } from "@/components/UI/Map/TeleteyitClusterGroup";

const HeatmapLayer = memo(HeatmapLayerFactory<Point>());

export type Point = [number, number, number];

type Props = {
  points: Point[];
  data: MarkerData[];
  food: any[];
  ahbap: any[];
  hospital: any[];
  teleteyit: any[];
  satellite: any[];
};

const LayerControl = ({
  points,
  data,
  ahbap,
  food,
  hospital,
  teleteyit,
  satellite,
}: Props) => {
  const mapLayers = useMapLayers();
  const longitudeExtractor = useCallback((p: Point) => p[1], []);
  const latitudeExtractor = useCallback((p: Point) => p[0], []);
  const intensityExtractor = useCallback((p: Point) => p[2], []);

  return (
    <>
      {mapLayers.includes(MapLayer.Heatmap) && (
        <HeatmapLayer
          fitBoundsOnUpdate
          radius={15}
          points={points}
          longitudeExtractor={longitudeExtractor}
          latitudeExtractor={latitudeExtractor}
          intensityExtractor={intensityExtractor}
          useLocalExtrema={false}
        />
      )}
      {mapLayers.includes(MapLayer.Markers) && <ClusterGroup data={data} />}
      {mapLayers.includes(MapLayer.Food) && <AhbapClusterGroup data={food} />}
      {mapLayers.includes(MapLayer.Teleteyit) && (
        <TeleteyitClusterGroup data={teleteyit} />
      )}
      {mapLayers.includes(MapLayer.Ahbap) && <AhbapClusterGroup data={ahbap} />}
      {mapLayers.includes(MapLayer.Hospital) && (
        <AhbapClusterGroup data={hospital} />
      )}
      {mapLayers.includes(MapLayer.Satellite) && (
        <AhbapClusterGroup data={satellite} />
      )}
    </>
  );
};

export default LayerControl;
