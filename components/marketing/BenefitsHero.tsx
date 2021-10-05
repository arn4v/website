import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Grid,
  Text,
  styled,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Card,
  Avatar,
  Separator,
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';

export const BenefitsHero = () => {
  return (
    <Section
      css={{
        bc: '$cyan2',
        position: 'relative',
        pb: '$7',
      }}
    >
      <FancyBackgroundChart />
      <Container size="3" css={{ position: 'relative' }}>
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Why Radix Primitives</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Take the pain out of UI work
          </Heading>
        </Box>

        <Grid columns="2" gap="9" css={{ mb: '$9' }}>
          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Save time. Ship faster.
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It takes a <em style={{ fontFamily: 'Georgia, serif' }}>lot</em> of time to develop
              and maintain robust UI components. From the ground up, we created Radix Primitives for
              building high quality products, so that you can save time and money, and ship a better
              product faster.
            </Paragraph>
          </Box>

          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Focus on your product
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It’s no secret that proper UI components are incredibly tricky to build. So if you can
              actually build an excellent component library, is this the best use of your team’s
              time? With Radix, you can focus on your unique engineering challenges instead.
            </Paragraph>
          </Box>
        </Grid>

        <Grid align="stretch" justify="start" gap="6" css={{ gridAutoFlow: 'column' }}>
          <Box>
            <Heading as="span" size="4" css={{ mb: '$2', textIndent: '-0.08em' }}>
              450K
            </Heading>
            <Text variant="gray" size="4">
              Monthly downloads
            </Text>
          </Box>
          <Box css={{ backgroundColor: '$slateA6', width: 1 }} />
          <Box>
            <Heading
              as="span"
              size="4"
              css={{ display: 'flex', alignItems: 'center', mb: '$2', textIndent: '-0.12em' }}
            >
              1100
              <Box as="span" css={{ fontSize: '75%', ml: '0.25em' }}>
                +
              </Box>
            </Heading>
            <Text variant="gray" size="4">
              Discord members
            </Text>
          </Box>
          <Box css={{ backgroundColor: '$slateA6', width: 1 }} />
          <Box>
            <Heading
              as="span"
              size="4"
              css={{ display: 'flex', alignItems: 'center', mb: '$2', textIndent: '-0.12em' }}
            >
              1300
              <Box as="span" css={{ fontSize: '75%', ml: '0.25em' }}>
                +
              </Box>
            </Heading>
            <Text variant="gray" size="4">
              GitHub stars
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

const FancyBackgroundChart = () => {
  return (
    <Flex align="end" css={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
      <Box
        css={{
          height: 1,
          backgroundColor: '$slateA3',
          flex: '100 0 auto',
          minWidth: 380,
          maxWidth: 1400,
        }}
      />
      <svg
        width="960"
        height="320"
        viewBox="0 0 960 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flex: 'none' }}
      >
        <path
          d="M178.507 305.111C131.659 323.63 100.966 315.481 66.2333 315.481C31.501 315.481 31 320 0 320H960V10H863.5C841.291 10 824.689 80.111 811.765 79.185C798.842 78.2591 793.995 63.658 785.918 64.3702C772.187 65.581 760.878 119.778 738.262 138.444C729.132 145.98 720.124 136.093 712.415 144C697.068 159.741 700.299 184.741 691.414 192.148C682.529 199.555 677.683 191.222 665.567 195.852C653.451 200.481 652.643 206.037 642.143 211.592C631.642 217.148 630.027 215.296 616.295 225.481C602.564 235.667 600.141 247.704 588.025 247.704C575.909 247.704 573.486 225.481 560.562 225.481C547.639 225.481 537.946 269.926 487.867 269.926C475.751 269.926 475.751 254.905 465.25 249.555C457.981 245.852 452.327 246.778 441.018 246.778C429.71 246.778 426.479 271.778 413.556 271.778C400.632 271.778 398.209 256.037 389.324 256.037C382.055 256.037 380.439 267.148 364.285 277.333C356.662 282.139 337.63 277.333 319.86 277.333C302.09 277.333 305.32 300.481 291.589 300.481C277.858 300.481 272.204 287.518 261.703 287.518C243.933 287.518 231.817 304.988 218.086 306.037C193.854 307.889 193.51 299.181 178.507 305.111Z"
          fill="url(#gradient-fill)"
        />
        <path
          d="M0 319.5C31 319.5 44.5923 315.481 66.2333 315.481C100.966 315.481 131.659 323.63 178.507 305.111C193.51 299.181 193.854 307.889 218.086 306.037C231.817 304.988 243.933 287.518 261.703 287.518C272.204 287.518 277.858 300.481 291.589 300.481C305.32 300.481 302.09 277.333 319.86 277.333C337.63 277.333 356.662 282.139 364.285 277.333C380.439 267.148 382.055 256.037 389.324 256.037C398.209 256.037 400.632 271.778 413.556 271.778C426.48 271.778 429.71 246.778 441.018 246.778C452.327 246.778 457.981 245.852 465.25 249.555C475.751 254.905 475.751 269.926 487.867 269.926C537.946 269.926 547.639 225.481 560.562 225.481C573.486 225.481 575.909 247.704 588.025 247.704C600.141 247.704 602.564 235.667 616.295 225.481C630.027 215.296 631.642 217.148 642.143 211.592C652.643 206.037 653.451 200.481 665.567 195.852C677.683 191.222 682.529 199.555 691.414 192.148C700.299 184.741 697.068 159.741 712.415 144C720.124 136.093 729.132 145.98 738.262 138.444C760.878 119.778 772.187 65.581 785.918 64.3702C793.995 63.658 798.842 78.2591 811.765 79.185C824.689 80.111 841.291 10 863.5 10"
          stroke="url(#gradient-line)"
          strokeWidth="1"
        />
        <circle cx="863" cy="10" r="5" fill="var(--colors-slate8)" />
        <defs>
          <linearGradient
            id="gradient-fill"
            x1="960"
            y1="10"
            x2="960"
            y2="319"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--colors-cyan2)" />
            <stop offset="1" stopColor="var(--colors-slate1)" />
          </linearGradient>
          <linearGradient
            id="gradient-line"
            x1="73"
            y1="320"
            x2="332"
            y2="359.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--colors-slateA3)" />
            <stop offset="1" stopColor="var(--colors-slateA7)" />
          </linearGradient>
        </defs>
      </svg>
      <Box
        css={{
          height: 310,
          background: 'linear-gradient(to bottom, $cyan2, $slate1)',
          flex: '1 1 auto',
        }}
      />
    </Flex>
  );
};
