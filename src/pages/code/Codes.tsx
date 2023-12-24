import { FC } from "react";
import CodesTable from "../../layout/code/CodesTable";

const Codes: FC = () => {
  const tableData = [
    {
      id: 1,
      code: "ABC",
      title: "Example Title",
      description: "Lorem ipsum",
      shortName: "AB",
      parentId: 0,
      status: "Active",
      subItems: [
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
      ],
    },
    {
      id: 2,
      code: "Def",
      title: "Example Title 2",
      description: "Lorem ipsum dolor",
      shortName: "DE",
      parentId: 1,
      status: "Pending",
      subItems: [
        {
          id: 5,
          code: "LMN",
          title: "SubItem Title 2",
          description: "SubItem Description 2",
          shortName: "LM",
          parentId: 2,
          status: "Pending",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
      ],
    },
    {
      id: 3,
      code: "GHI",
      title: "Example Title 3",
      description: "Lorem ipsum semit",
      shortName: "GH",
      parentId: 2,
      status: "Disabled",
      subItems: [
        {
          id: 6,
          code: "OPQ",
          title: "SubItem Title 3",
          description: "SubItem Description 3",
          shortName: "OP",
          parentId: 3,
          status: "Disabled",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
        {
          id: 4,
          code: "XYZ",
          title: "SubItem Title 1",
          description: "SubItem Description 1",
          shortName: "XY",
          parentId: 1,
          status: "Active",
        },
      ],
    },
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with ID ${id}`);
  };

  const handleView = (id: number) => {
    console.log(`View item with ID ${id}`);
  };

  return (
    <div>
      <CodesTable
        data={tableData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default Codes;
