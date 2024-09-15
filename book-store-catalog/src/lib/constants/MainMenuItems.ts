interface MainMenuItems {
    name: string;
    key: string;
    isDisabled: boolean;
  }
  
  export const MainMenuItems: MainMenuItems[] = [
    {
      name: "Home",
      key: "home",
      isDisabled: false,
    },
    {
      name: "Products",
      key: "products",
      isDisabled: true,
    },
  ];
  