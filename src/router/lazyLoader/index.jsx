import React, { lazy, Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

export const Lazyloading = (importFunc) => {
  TopBarProgress.config({
    barColors: {
      0: "#2294B1",
      "1.0": "#2294B1",
    },
    shadowBlur: 5,
  });

  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<TopBarProgress />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

Lazyloading.defaultProps = {
  fallback: null,
};
