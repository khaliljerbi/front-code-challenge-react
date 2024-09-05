'use client'

import { CardItem } from "@/types/card.type";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Card from "./card";
import { useCardGrid } from "@/hooks/useCardGrid";
const CardGrid = () => {
  const { cardGrid } = useCardGrid()
  return (
    <Stack gap="40px" mt={{ base: "40px", md: "80px", xl: "120px" }}>
      <Text fontSize={[16, 20, 24]}>Lorem ipsum dolor sit amet</Text>
      <Grid
        gridTemplateAreas={{ base: `'C0' 'C1' 'C2''C3' 'C4' 'C5'`, md: `'C0 C1' 'C2 C3' 'C4 C5'` , xl: `'C0 C0 C1 C2''C3 C4 C5 C5'` }}
        gridAutoColumns="1fr"
        gap={{ base: 2, md: 4, xl: 6  }}
      >
        {cardGrid.cards.map((c: CardItem, index: number) => (
          <GridItem area={`C${index}`} key={c.title}>
            <Card
              title={c.title}
              subtitle={c.subtitle}
              backgroundAsset={c.backgroundAsset}
              description={c.description}
              cta={c.cta}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default CardGrid;
