"use client";

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { footerData } from "./footerData";

const FooterLinks = () => {
  return (
    <Box>
      {/* Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {footerData.map((group) => (
          <Box key={group.title}>
            <Typography
              component="h3"
              sx={{
                fontWeight: "700",
                mb: 2
              }}
            >
              {group.title}
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {group.links.map((link) => (
                <Box component="li" key={link.title}>
                  <Link href={link.href}>
                    <Typography
                      component="span"
                      color="text.secondary"
                      sx={{
                        fontSize: 14,
                        transition: "color 0.2s",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Tablet / Mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: 1,
        }}
      >
        {footerData.map((group) => (
          <Accordion
            key={group.title}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: "grey.100",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  component={HiOutlineChevronDown}
                  sx={{
                    fontSize: 20,
                  }}
                />
              }
              sx={{
                minHeight: 48,
                justifyContent: "center",

                "& .MuiAccordionSummary-content": {
                  justifyContent: "center",
                  margin: 0,
                },
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                {group.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                {group.links.map((link) => (
                  <Box component="li" key={link.title}>
                    <Link href={link.href}>
                      <Typography
                        component="span"
                        sx={{
                          color: "text.secondary",
                          fontSize: 14,
                        }}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FooterLinks;