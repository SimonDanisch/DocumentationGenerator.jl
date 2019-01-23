var documenterSearchIndex = {"docs": [

{
    "location": "#HDF5.get_datasets-Tuple{HDF5File}",
    "page": "Home",
    "title": "HDF5.get_datasets",
    "category": "method",
    "text": "get_datasets(file::HDF5File) -> datasets::Vector{HDF5Dataset}\n\nGet all the datasets in an hdf5 file without loading the data.\n\n\n\n\n\n"
},

{
    "location": "#HDF5.h5open",
    "page": "Home",
    "title": "HDF5.h5open",
    "category": "function",
    "text": "h5open(filename::AbstractString, mode::AbstractString=\"r\"; swmr=false)\n\nOpen or create an HDF5 file where mode is one of:\n\n\"r\"  read only\n\"r+\" read and write\n\"cw\" read and write, create file if not existing, do not truncate\n\"w\"  read and write, create a new file (destroys any existing contents)\n\nPass swmr=true to enable (Single Writer Multiple Reader) SWMR write access for \"w\" and \"r+\", or SWMR read access for \"r\".\n\n\n\n\n\n"
},

{
    "location": "#HDF5.h5open-Tuple{Function,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "HDF5.h5open",
    "category": "method",
    "text": "function h5open(f::Function, args...; swmr=false)\n\nApply the function f to the result of h5open(args...;kwargs...) and close the resulting HDF5File upon completion. For example with a do block:\n\nh5open(\"foo.h5\",\"w\") do h5\n    h5[\"foo\"]=[1,2,3]\nend\n\n\n\n\n\n"
},

{
    "location": "#HDF5.ishdf5-Tuple{AbstractString}",
    "page": "Home",
    "title": "HDF5.ishdf5",
    "category": "method",
    "text": "ishdf5(name::AbstractString)\n\nReturns true if name is a path to a valid hdf5 file, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#HDF5.set_dims!-Tuple{HDF5Dataset,Tuple{Vararg{Int64,N}} where N}",
    "page": "Home",
    "title": "HDF5.set_dims!",
    "category": "method",
    "text": "set_dims!(dset::HDF5Dataset, new_dims::Dims)\n\nChange the current dimensions of a dataset to new_dims, limited by max_dims = get_dims(dset)[2]. Reduction is possible and leads to loss of truncated data.\n\n\n\n\n\n"
},

{
    "location": "#Base.isopen-Tuple{HDF5File}",
    "page": "Home",
    "title": "Base.isopen",
    "category": "method",
    "text": "isopen(obj::HDF5File)\n\nReturns true if obj has not been closed, false if it has been closed.\n\n\n\n\n\n"
},

{
    "location": "#HDF5.create_external-Tuple{Union{HDF5File, HDF5Group},Any,Any,Any}",
    "page": "Home",
    "title": "HDF5.create_external",
    "category": "method",
    "text": "create_external(source::Union{HDF5File, HDF5Group}, source_relpath, target_filename, target_path;\n                lcpl_id=HDF5.H5P_DEFAULT, lapl_id=HDF5.H5P.DEFAULT)\n\nCreate an external link such that source[source_relpath] points to target_path within the file with path target_filename; Calls [H5Lcreate_external](https://www.hdfgroup.org/HDF5/doc/RM/RM_H5L.html#Link-CreateExternal).\n\n\n\n\n\n"
},

{
    "location": "#HDF5.get_dims-Tuple{HDF5Dataset}",
    "page": "Home",
    "title": "HDF5.get_dims",
    "category": "method",
    "text": "get_dims(dset::HDF5Dataset)\n\nGet the array dimensions from a dataset and return a tuple of dims and maxdims.\n\n\n\n\n\n"
},

{
    "location": "#HDF5.start_swmr_write-Tuple{HDF5File}",
    "page": "Home",
    "title": "HDF5.start_swmr_write",
    "category": "method",
    "text": "start_swmr_write(h5::HDF5File)\n\nStart Single Reader Multiple Writer (SWMR) writing mode. See SWMR documentation.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [HDF5]\nOrder = [:type, :function]"
},

]}