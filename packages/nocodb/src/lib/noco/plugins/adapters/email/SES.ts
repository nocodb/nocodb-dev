// @ts-ignore
import IEmailAdapter, { XcEmail } from '../../../../../interface/IEmailAdapter';

export default // @ts-ignore
class SES implements IEmailAdapter {
  // @ts-ignore
  private input: any;

  constructor(input: any) {
    this.input = input;
  }

  public async init(): Promise<any> {}

  public async mailSend(_mail: XcEmail): Promise<any> {}

  test(_email): Promise<boolean> {
    return Promise.resolve(false);
  }
}

/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
