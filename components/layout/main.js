import React, { useEffect, useState } from "react";
import HeaderOne from "../header";
import Breadcrubs from "../widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/1.png";
import MasterFooter from "../footer/common/MasterFooter";
import Footer from "../footer";
import {AppSetting} from "../constants.ts";
import axios from "../lib/axios";
const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      {title?
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />:''}
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
