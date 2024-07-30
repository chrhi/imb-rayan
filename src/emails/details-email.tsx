import { TProduct } from "@/types";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

type Params = {
  email: string;
};

export const DetailsEmail = ({ email }: Params) => (
  <Html>
    <Head />
    <Preview>Dtails email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={track.container}>
          <Row>
            <Column>
              <Text style={global.paragraphWithBold}>
                {"I.M.B Industrie Sarl"}
              </Text>
              <Text style={track.number}>
                {"1, bd Mohamed Khemisti 16100 Dar El Beida Alger -Algérie"}
              </Text>
            </Column>
            <Column align="right">
              <Text style={global.paragraphWithBold}>
                {"+213 23 67 61 62 – 63 – 64"}
              </Text>
              <Text style={track.number}>{"info@imb-industrie.com"}</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Heading style={global.heading}>Catalogue général I.M.B</Heading>
          <a
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "12px",
              background: "#DC4955",
              color: "#ffffff",
              padding: "16px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Télécharger
          </a>
        </Section>
        <Hr style={global.hr} />
      </Container>
    </Body>
  </Html>
);

export default DetailsEmail;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;
