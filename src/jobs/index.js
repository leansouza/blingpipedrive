import searchAllDeal from './pipeDrive/searchAllDeal.job';
import insertOrdered from './bling/insertOrdered';

export default function (app) {

  if (app.envs.DEVELOPMENT === 'off') {
    searchAllDeal(app.expressInstance.databases).start();
    insertOrdered(app.expressInstance.databases).start();
  }
}
