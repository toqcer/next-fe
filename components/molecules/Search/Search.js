import { Button, Input } from '@components/atoms';
import { FiSearch } from 'react-icons/fi';

function Search() {
    return (
        <div className="flex flex-1 bg-white rounded-sm overflow-hidden">
            <Input placeholder="Search Input" className="flex-1" />
            <div>
                <Button>
                    <FiSearch color="white" />
                </Button>
            </div>
        </div>
    )
}

export default Search