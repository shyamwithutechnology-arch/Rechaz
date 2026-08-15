// utils/inAppUpdate.ts
import SpInAppUpdates, { IAUUpdateKind } from 'sp-react-native-in-app-updates';

const inAppUpdates = new SpInAppUpdates(false);

export const checkForUpdate = async () => {
  try {
    const result = await inAppUpdates.checkNeedsUpdate();

    if (result.shouldUpdate) {
      inAppUpdates.startUpdate({
        updateType: IAUUpdateKind.IMMEDIATE, // or FLEXIBLE
      });
    }
  } catch (error) {
    console.log('Update error:', error);
  }
};
