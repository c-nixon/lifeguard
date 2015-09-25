var searchIndex = {};
searchIndex['lifeguard'] = {"items":[[0,"","lifeguard","",null,null],[3,"Recycled","","A smartpointer which uses a shared reference (`&`) to know\nwhen to move its wrapped value back to the `Pool` that\nissued it.",null,null],[3,"RcRecycled","","A smartpointer which uses reference counting (`Rc`) to know\nwhen to move its wrapped value back to the `Pool` that\nissued it.",null,null],[3,"Pool","","A collection of values that can be reused without requiring new allocations.",null,null],[3,"PoolBuilder","","Used to define settings for and ultimately create a `Pool`.",null,null],[12,"starting_size","","",0,null],[12,"max_size","","",0,null],[12,"supplier","","",0,null],[5,"pool","","Produces a `PoolBuilder` instance",null,{"inputs":[],"output":{"name":"poolbuilder"}}],[0,"settings","","",null,null],[3,"StartingSize","lifeguard::settings","Specifies how many values should be requested from the Supplier at\ninitialization time. These values will be available for immediate use.",null,null],[3,"MaxSize","","Specifies the largest number of values the `Pool` will hold before it\nwill begin to drop values being returned to it.",null,null],[3,"Supplier","","Specifies a value implementing `Supply<Output=T>` that will be used to allocate\nnew values. If unspecified, `T::new()` will be invoked.",null,null],[8,"OptionSetter","","Implementing this trait allows a struct to act as a configuration\nparameter in the builder API.",null,null],[10,"set_option","","",1,{"inputs":[{"name":"optionsetter"},{"name":"t"}],"output":{"name":"t"}}],[11,"set_option","","",2,{"inputs":[{"name":"startingsize"},{"name":"poolbuilder"}],"output":{"name":"poolbuilder"}}],[11,"set_option","","",3,{"inputs":[{"name":"maxsize"},{"name":"poolbuilder"}],"output":{"name":"poolbuilder"}}],[11,"set_option","","",4,{"inputs":[{"name":"supplier"},{"name":"poolbuilder"}],"output":{"name":"poolbuilder"}}],[8,"Recycleable","lifeguard","In order to be managed by a `Pool`, values must be of a type that\nimplements the `Recycleable` trait. This allows the `Pool` to create\nnew instances as well as reset existing instances to a like-new state.",null,null],[10,"new","","Allocates a new instance of the implementing type.",5,{"inputs":[{"name":"recycleable"}],"output":{"name":"self"}}],[10,"reset","","Sets the state of the modified instance to be that of a freshly\nallocated instance, thereby allowing it to be reused.",5,{"inputs":[{"name":"recycleable"}],"output":null}],[8,"InitializeWith","","Informs how an already allocated value should be initialized\nwhen provided with a model value or other meaningful input.",null,null],[10,"initialize_with","","",6,{"inputs":[{"name":"initializewith"},{"name":"t"}],"output":null}],[8,"Supply","","Provides a method which will produce new instances of a type",null,null],[16,"Output","","",7,null],[10,"get","","",7,{"inputs":[{"name":"supply"}],"output":{"name":"output"}}],[11,"new","collections::string","",8,{"inputs":[{"name":"string"}],"output":{"name":"string"}}],[11,"reset","","",8,{"inputs":[{"name":"string"}],"output":null}],[11,"new","collections::vec","",9,{"inputs":[{"name":"vec"}],"output":{"name":"vec"}}],[11,"reset","","",9,{"inputs":[{"name":"vec"}],"output":null}],[11,"new","collections::vec_deque","",10,{"inputs":[{"name":"vecdeque"}],"output":{"name":"vecdeque"}}],[11,"reset","","",10,{"inputs":[{"name":"vecdeque"}],"output":null}],[11,"initialize_with","collections::string","",8,{"inputs":[{"name":"string"},{"name":"a"}],"output":null}],[11,"as_ref","lifeguard","Gets a shared reference to the value wrapped by the smartpointer.",11,{"inputs":[{"name":"rcrecycled"}],"output":{"name":"t"}}],[11,"as_mut","","Gets a mutable reference to the value wrapped by the smartpointer.",11,{"inputs":[{"name":"rcrecycled"}],"output":{"name":"t"}}],[11,"fmt","","",11,{"inputs":[{"name":"rcrecycled"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"rcrecycled"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deref","","",11,{"inputs":[{"name":"rcrecycled"}],"output":{"name":"t"}}],[11,"deref_mut","","",11,{"inputs":[{"name":"rcrecycled"}],"output":{"name":"t"}}],[11,"detach","","Disassociates the value from the `Pool` that issued it. This\ndestroys the smartpointer and returns the previously wrapped value.",11,{"inputs":[{"name":"rcrecycled"}],"output":{"name":"t"}}],[11,"as_ref","","Gets a shared reference to the value wrapped by the smartpointer.",12,{"inputs":[{"name":"recycled"}],"output":{"name":"t"}}],[11,"as_mut","","Gets a mutable reference to the value wrapped by the smartpointer.",12,{"inputs":[{"name":"recycled"}],"output":{"name":"t"}}],[11,"fmt","","",12,{"inputs":[{"name":"recycled"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"recycled"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deref","","",12,{"inputs":[{"name":"recycled"}],"output":{"name":"t"}}],[11,"deref_mut","","",12,{"inputs":[{"name":"recycled"}],"output":{"name":"t"}}],[11,"detach","","Disassociates the value from the `Pool` that issued it. This\ndestroys the smartpointer and returns the previously wrapped value.",12,{"inputs":[{"name":"recycled"}],"output":{"name":"t"}}],[11,"with_size","","Creates a pool with `size` elements of type `T` allocated.",13,{"inputs":[{"name":"pool"},{"name":"usize"}],"output":{"name":"pool"}}],[11,"with_size_and_max","","Creates a pool with `size` elements of type `T` allocated\nand sets a maximum pool size of `max_size`. Values being\nadded to the pool via `Pool::attach` or being returned to\nthe pool upon dropping will instead be discarded if the pool\nis full.",13,{"inputs":[{"name":"pool"},{"name":"usize"},{"name":"usize"}],"output":{"name":"pool"}}],[11,"size","","Returns the number of values remaining in the pool.",13,{"inputs":[{"name":"pool"}],"output":{"name":"usize"}}],[11,"max_size","","Returns the maximum number of values the pool can hold.",13,{"inputs":[{"name":"pool"}],"output":{"name":"usize"}}],[11,"new","","Removes a value from the pool and returns it wrapped in\na `Recycled smartpointer. If the pool is empty when the\nmethod is called, a new value will be allocated.",13,{"inputs":[{"name":"pool"}],"output":{"name":"recycled"}}],[11,"new_from","","Removes a value from the pool, initializes it using the provided\nsource value, and returns it wrapped in a `Recycled` smartpointer.\nIf the pool is empty when the method is called, a new value will be\nallocated.",13,{"inputs":[{"name":"pool"},{"name":"a"}],"output":{"name":"recycled"}}],[11,"attach","","Associates the provided value with the pool by wrapping it in a\n`Recycled` smartpointer.",13,{"inputs":[{"name":"pool"},{"name":"t"}],"output":{"name":"recycled"}}],[11,"detached","","Removes a value from the pool and returns it without wrapping it in\na smartpointer. When the value goes out of scope it will not be\nreturned to the pool.",13,{"inputs":[{"name":"pool"}],"output":{"name":"t"}}],[11,"new_rc","","Removes a value from the pool and returns it wrapped in\nan `RcRecycled` smartpointer. If the pool is empty when the\nmethod is called, a new value will be allocated.",13,{"inputs":[{"name":"pool"}],"output":{"name":"rcrecycled"}}],[11,"new_rc_from","","Removes a value from the pool, initializes it using the provided\nsource value, and returns it wrapped in an `RcRecycled` smartpointer.\nIf the pool is empty when the method is called, a new value will be\nallocated.",13,{"inputs":[{"name":"pool"},{"name":"a"}],"output":{"name":"rcrecycled"}}],[11,"attach_rc","","Associates the provided value with the pool by wrapping it in an\n`RcRecycled` smartpointer.",13,{"inputs":[{"name":"pool"},{"name":"t"}],"output":{"name":"rcrecycled"}}],[11,"with","","",0,{"inputs":[{"name":"poolbuilder"},{"name":"u"}],"output":{"name":"poolbuilder"}}],[11,"build","","",0,{"inputs":[{"name":"poolbuilder"}],"output":{"name":"pool"}}]],"paths":[[3,"PoolBuilder"],[8,"OptionSetter"],[3,"StartingSize"],[3,"MaxSize"],[3,"Supplier"],[8,"Recycleable"],[8,"InitializeWith"],[8,"Supply"],[3,"String"],[3,"Vec"],[3,"VecDeque"],[3,"RcRecycled"],[3,"Recycled"],[3,"Pool"]]};
initSearch(searchIndex);
