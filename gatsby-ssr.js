/* eslint-disable import/prefer-default-export */
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => setPostBodyComponents(
  [<script src="https://f.convertkit.com/ckjs/ck.5.js" />]
);
