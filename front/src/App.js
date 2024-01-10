import React from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

import { useEffect, useState } from "react";

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
