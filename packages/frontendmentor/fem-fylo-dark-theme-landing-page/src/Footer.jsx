import React from "react";

import {
  Typography,
  Button as MuiButton,
  IconButton as MuiIconButton,
  Box as MuiBox,
  Input as MuiInput,
  Link as MuiLink,
} from "@mui/material";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import { colors, sizes } from "./Variables";

import {
  Place as MuiPlace,
  PhoneInTalk as MuiPhoneInTalk,
  Email as MuiEmail,
  Facebook as MuiFb,
  Twitter as MuiTwit,
  Instagram as MuiInsta,
} from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";

const Heading = styled(Typography)`
  font-size: 1.5em;
  font-weight: 700;
  max-width: 600px;
`;

const Footer = styled.footer`
  background: ${colors.footer};
  margin-block-start: 15em;
  padding-block-start: 12em;
  padding-block-end: 6em;
  position: relative;
`;

const FloatingCta = styled(MuiBox)`
  background: ${colors.intro};
  width: 90%;
  max-width: 800px;
  padding: 2em;
  margin-inline: auto;
  border-radius: 5px;
  /* Did this without any googling 😎 */
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  position: absolute;

  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  text-align: center;

  @media screen and (max-width: ${sizes.sm}) {
    transform: translate(-50%, -55%);
  }
`;

const Form = styled.form`
  --itm-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-self: normal;

  @media screen and (min-width: ${sizes.md}) {
    flex-direction: row;
  }
`;

const Input = styled(MuiInput)`
  background-color: white;
  color: black;
  border-radius: 999px;
  padding: .5em 1em;
  height: var(--itm-height);
  flex: auto;
}
`;
const Button = styled(MuiButton)`
  padding: 0.5em 1em;
  height: var(--itm-height);
`;

const FooterLogo = styled.img`
  width: clamp(100px, 40%, 150px);
  height: fit-content;
`;

const FooterContent = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 95%;
  margin-inline: auto;
  max-width: 1200px;

  @media screen and (min-width: ${sizes.md}) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
    gap: 1em;
  }
`;

const FooterItm = styled(MuiBox)`
  display: flex;
  align-items: center;
  gap: 1em;
  svg {
    margin-top: 3px;
    width: 25px;
  }
`;

const FooterList = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const FooterNavLink = styled(MuiLink)`
  text-decoration: none;
  color: inherit;
`;

const SocialButton = styled(MuiIconButton)`
  width: 20px;
  height: 20px;
  padding: 0.8em;
`;

const FooterListSocial = styled(FooterList)`
  flex-direction: row;
  justify-content: center;
  margin-block: 1em;
`

export default function () {
  const theme = useTheme();

  return (
    <Footer>
      <FloatingCta>
        <Heading variant="h2"> Get early access today</Heading>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <Form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            alert(e.target.elements[0].value);
          }}
        >
          <Input
            type="email"
            placeholder="email@example.com"
            required
            disableUnderline={true}
          />

          <Button variant="contained" color="primary" type="submit">
            get started for free
          </Button>
        </Form>
      </FloatingCta>

      <FooterContent>
        <FooterLogo src={Logo} alt="" />

        <FooterList>
          <FooterItm>
            <MuiPlace
              sx={{
                alignSelf: "flex-start",
              }}
            />
            <Typography variant="body2" sx={{ maxWidth: "50ch" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates maiores, praesentium nobis aspernatur, natus alias
              itaque harum tempore quaerat
            </Typography>
          </FooterItm>
          <FooterItm>
            <MuiPhoneInTalk />
            <Typography variant="body2">+1-543-234-556</Typography>
          </FooterItm>
          <FooterItm>
            <MuiEmail />
            <Typography variant="body2">foo@example.com</Typography>
          </FooterItm>
        </FooterList>

        <FooterList>
          <FooterNavLink href="#">About Us</FooterNavLink>
          <FooterNavLink href="#">Jobs</FooterNavLink>
          <FooterNavLink href="#">Press</FooterNavLink>
          <FooterNavLink href="#">Blog</FooterNavLink>
        </FooterList>

        <FooterList>
          <FooterNavLink href="#">Contact Us</FooterNavLink>
          <FooterNavLink href="#"> Terms</FooterNavLink>
          <FooterNavLink href="#"> Privacy</FooterNavLink>
        </FooterList>
      </FooterContent>

      <FooterListSocial>
        <SocialButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
          }}
          size="small"
          color="primary"
        >
          <MuiFb fontSize="inherit" />
        </SocialButton>

        <SocialButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
          }}
          size="small"
          color="primary"
        >
          <MuiTwit fontSize="inherit" />
        </SocialButton>

        <SocialButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
          }}
          size="small"
          color="primary"
        >
          <MuiInsta fontSize="inherit" />
        </SocialButton>
      </FooterListSocial>
    </Footer>
  );
}
