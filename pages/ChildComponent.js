import React from 'react';
import { Helmet } from 'react-helmet';

export default function ChildComponent() {
  return (
    <div>
      <Helmet>
        <title>Modified Title</title>
      </Helmet>
      <h1>Child Component</h1>
    </div>
  )
}