import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should exists form', () => {
    page.navigateTo();
    expect(page.getForm()).not.toBeNull();
  });
});
