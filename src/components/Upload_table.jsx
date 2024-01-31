import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Select from 'react-select';
import { RxCross1 } from 'react-icons/rx';

const Upload_table = () => {
  const { data, setData } = useContext(UserContext);

  const handleTagChange = (rowId, selectedTag) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === rowId
          ? {
              ...row,
              'select tags': row['select tags']
                .split(', ')
                .filter((tag) => tag !== selectedTag)
                .join(', '),
              'selected tags': row['selected tags']
                ? `${row['selected tags']}, ${selectedTag}`
                : selectedTag,
            }
          : row
      )
    );
  };

  const handleRemoveTag = (rowId, tagToRemove) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === rowId
          ? {
              ...row,
              'selected tags': row['selected tags']
                .split(', ')
                .filter((tag) => tag !== tagToRemove)
                .join(', '),
              'select tags': `${row['select tags']}, ${tagToRemove}`,
            }
          : row
      )
    );
  };

  const availableTags = [
    'Technology',
    'Fashion',
    'Food',
    'Travel',
    'Sports',
    'Music',
    'Art',
    'Health',
    'Education',
    'Finance',
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#e4e4e7' : null,
        marginLeft:'5px',
    }),
  };

  return (
    <div className='w-full py-2 px-4 bg-zinc-100 flex-grow overflow-auto overflow-x-auto custom-scrollbar'>
      <table className='w-full rounded-xl border-separate border-spacing-y-2 border border-slate-200 bg-zinc-200 '>
        <thead className=''>
          <tr className=''>
            <th className='p-2 text-center'>SI No.</th>
            <th className='p-2 text-center'>Links</th>
            <th className='p-2 text-center'>Prefix</th>
            <th className='p-2 text-center'>Select Tags</th>
            <th className='p-2 text-center'>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='bg-white border border-slate-300 rounded-2xl'>
              <td className='p-2 text-center'>{item.id}</td>
              <td className='p-2 text-center'>
                <div
                  className='text-blue-400 underline cursor-pointer hover:bg-blue-50 inline'
                  onClick={() => {
                    window.open(`http://${item.links}`);
                  }}
                >
                  {item.links}
                </div>
              </td>
              <td className='p-2 text-center'>{item.prefix}</td>
              <td className='p-2 text-center'>
                <Select
                  options={availableTags
                    .filter((tag) => !item['selected tags'].includes(tag))
                    .map((tag) => ({
                      value: tag,
                      label: tag,
                    }))}
                  onChange={(selectedOption) =>
                    handleTagChange(item.id, selectedOption.value)
                  }
                  styles={customStyles}
                />
              </td>

              <td className='p-2 text-center flex '>
                {item['selected tags']
                  .split(', ')
                  .filter((tag) => tag.trim() !== '')
                  .map((tag) => (
                    <div
                      key={tag}
                      className='flex items-center mr-1 text-white px-1 py-[0.20rem]  bg-[#5C5EEE] rounded-md'
                    >
                      <span className='mr-1'>{tag}</span>
                      <RxCross1
                        className='cursor-pointer '
                        onClick={() => handleRemoveTag(item.id, tag)}
                      />
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upload_table;









