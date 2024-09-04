'use client'

import content from "@/data/index.json";
import { CardItem, CardList } from "@/types/card.type";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Card from "./card";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";
const CardGrid = () => {
  const cardGrid = content.content.find((x) => x.type === SECTION_TYPE.CARD_GRID) as CardList;
  return (
    <Stack gap="40px">
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
