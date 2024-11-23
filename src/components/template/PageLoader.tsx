// import darkIcon from '@/assets/icons/twin-icon-dark.png';
// import lightIcon from '@/assets/icons/twin-icon-light.png';
// import { useSettingsStore } from '@/store';

const PageLoader = () => {
  // const { themeMode } = useSettingsStore();

  // const twinSmallLogo = themeMode === 'dark' ? lightIcon : darkIcon;

  return (
    <main className="w-full h-full flex-1 flex justify-center items-center">
      <div className="loader flex items-center justify-center">
        {/* <img src={twinSmallLogo} className="w-8" /> */}
      </div>
    </main>
  );
};

export default PageLoader;
