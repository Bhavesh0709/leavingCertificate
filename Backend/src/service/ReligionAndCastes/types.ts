import Caste from '../../models/Caste';
import Religion from '../../models/Religion';
import SubCaste from '../../models/SubCaste';

export interface IReligionAndCasteResp {
    religions: Religion[];
    caste: Caste[];
    subCaste: SubCaste[];
}
