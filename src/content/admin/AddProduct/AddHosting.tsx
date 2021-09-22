// require("dotenv").config();
import React, { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  CardActionArea,
  Tooltip,
  Avatar,
} from "@material-ui/core";

import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";
import Text from "src/components/Text";
import Label from "src/components/Label";

import { useTranslation } from "react-i18next";

import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";

import CardDomain from "../../../components/Domain/CardDomain";
import DialogDomain from "../../../components/Dialog/DialogDomain";

import axios from "axios";

import { gql, useMutation, useQuery } from "@apollo/client";

function AddHosting() {
  return <div>aaaaahosting </div>;
}

export default AddHosting;
