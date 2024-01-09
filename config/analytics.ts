import ReactGA from 'react-ga';

export const initGA = (): void => {
  const keyGA = process.env.GA_KEY || "";
  ReactGA.initialize(keyGA);
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
