select
	kt.id,
	name,
	address,
	distance
  from kantor kt
  left join (
  		select kt2.id, (
     6371 * acos (
      cos ( radians(-6.287963) )
      * cos( radians( latitude ) )
      * cos( radians( longitude ) - radians(106.812293) )
      + sin ( radians(-6.287963) )
      * sin( radians( latitude ) )
    )
  	) AS distance
  	from kantor kt2
  ) ktr on kt.id = ktr.id
  where distance <= 5