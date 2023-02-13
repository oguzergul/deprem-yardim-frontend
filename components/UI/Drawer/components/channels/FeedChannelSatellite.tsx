import { DrawerContent } from "@/components/UI/Drawer/components/channels/DrawerContent";

interface FeedChannelSatelliteDataProps {
  channel: string;
  properties: {
    id: number;
  };
}

export const FeedChannelSatellite = (props: FeedChannelSatelliteDataProps) => {
  return (
    <DrawerContent>
      <DrawerContent.Header>
        <DrawerContent.Title>{props?.channel}</DrawerContent.Title>
        <DrawerContent.Badge>{props?.properties?.id}</DrawerContent.Badge>
      </DrawerContent.Header>
    </DrawerContent>
  );
};
